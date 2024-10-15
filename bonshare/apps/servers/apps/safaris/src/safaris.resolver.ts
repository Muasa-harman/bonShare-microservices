import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSafariResponse } from './types/safari.types';
import { SafarisService } from './safaris.service';
import { CreateSafariDto } from './dto/safari.dto';
import { BadRequestException } from '@nestjs/common';

@Resolver('Safari')
export class SafariResolvers {
  constructor(readonly safariService: SafarisService) {}

  @Mutation(() => CreateSafariResponse)
  async register(
    @Args('registerInput') createSafaridto: CreateSafariDto,
    @Context('') context: { res: Response },
  ): Promise<CreateSafariResponse> {
    !createSafaridto.arrival ||
      !createSafaridto.capacity ||
      !createSafaridto.car ||
      !createSafaridto.date ||
      !createSafaridto.departure ||
      !createSafaridto.driver ||
      !createSafaridto.email ||
      !createSafaridto.images ||
      !createSafaridto.phone_number ||
      !createSafaridto.price;
    {
      throw new BadRequestException('please fill all fields');
    }
  }
}
