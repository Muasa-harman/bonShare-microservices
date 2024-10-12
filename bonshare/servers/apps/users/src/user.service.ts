import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import { PrismaService } from '../../../prisma/Prisma.service';
import { EmailService } from './email/email.service';
import { ActivationDto, LoginDto, RegisterDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { TokenSender } from './utils/sendToken';

interface UserData {
  name: string;
  email: string;
  password: string;
  phone_number: number;
  // address: string
}

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
  ) {}

  // register user service
  async register(registerDto: RegisterDto, response: Response) {
    const { name, email, password, phone_number } = registerDto;
    const IsEmailExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (IsEmailExist) {
      throw new BadRequestException('user already exist with this email');
    }

    const isPhoneNumberExist = await this.prisma.user.findFirst({
      where: {
        phone_number,
      },
    });

    if (isPhoneNumberExist) {
      throw new BadRequestException(
        'User already exist with this phone number',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //create the user in the database

    const user = { name, email, password: hashedPassword, phone_number };

    // Generate activation token
    const activationToken = await this.createActivationToken(user);

    const activationCode = activationToken.activationCode;

    const activation_token = activationToken.token;

    // send activation email

    await this.emailService.sendMail({
      email,
      subject: 'Activate your account!',
      template: './activation-mail',
      name,
      activationCode,
    });

    // activation token returned
    return { activation_token, response };
  }
  // create activation token
  async createActivationToken(user: UserData) {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

    const token = this.jwtService.sign(
      {
        user,
        activationCode,
      },
      {
        secret: this.configService.get<string>('ACTIVATION_SECRET'),
        expiresIn: '10min',
      },
    );
    return { token, activationCode };
  }

    //   activation user
    async activateUser(activationDto: ActivationDto,response:Response){
        const {activationCode,activationToken} = activationDto;

        const newUser: {user: UserData,activationCode: string} = this.jwtService.verify(activationToken,{
            secret:this.configService.get<string>('ACTIVATION_SECRET'),
        } as JwtVerifyOptions) as {user: UserData; activationCode: string};
        if(newUser.activationCode !== activationCode){
            throw new BadRequestException("Invalid activation code")
        }

        const {name, email,password,phone_number} = newUser.user;

        const existUser = await this.prisma.user.findUnique({
            where:{
                email,
            },
        })

        if(existUser){
            throw new BadRequestException('User already exist with this email')
        }

        const user = await this.prisma.user.create({
            data: {
                name,email,password,phone_number
            }
        })
        return {user, response}


    }
    // Login service
    async LoginDto(loginDto:LoginDto){
        const {email,password} = loginDto;
        const user = await this.prisma.user.findUnique({
            where:{
                email,
            }
        });
        if(user && (await this.comparePassword(password,user.password))){
            const tokenSender = new TokenSender(this.configService,this.jwtService);
            return tokenSender.sendToken(user);
        } else {
            return{
                user: null,
                accessToken: null,
                refreshToken: null,
                error:{
                    message: 'Invalid email or password'
                }
            }
        }
    }
    // compare with hashed password
    async comparePassword(password: string,hashedPassword:string): Promise<boolean>{
        return await bcrypt.compare(password,hashedPassword)
    }
    // get logged in user
    async getLoggedInUser(req:any){
        const user = req.user;
        const accessToken = req.accesstoken;
        const refreshToken = req.refreshtoken;

        return {user,refreshToken,accessToken}
    }
    // logout user
    async Logout(req:any){
        req.user = null;
        req.refreshToken = null;
        req.accessToken = null;
        return {message: "Logged out successfully!"}
    }
    // get all users
    async getUsers(){}
    async createOrder(){}
}
