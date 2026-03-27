import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
// import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    // necesitamos vincular la review
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    try {
      const { productId, ...reviewDetails } = createReviewDto;
      const review = this.reviewRepository.create({
        ...reviewDetails,
        product: { id: productId },
        user: { id: 'ea5ef178-41ce-4147-ae2c-c891497d8830' },
      });

      await this.reviewRepository.save(review);
      return review;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException('Check logs');
    }
  }
}
