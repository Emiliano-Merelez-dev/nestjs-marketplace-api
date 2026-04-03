import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
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
        user: { id: '2478857b-6b9c-4b4d-8db7-a3d14cbc68e8' },
      });

      await this.reviewRepository.save(review);
      return review;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException('Check logs');
    }
  }

  async findAll() {
    try {
      const reviews = await this.reviewRepository.find({
        relations: ['user', 'product'],
      });
      return reviews;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findOne(id: string) {
    const review = await this.reviewRepository.findOne({
      where: { id },
      relations: ['user', 'product'],
    });

    if (!review) throw new NotFoundException(`review with id ${id} not found`);

    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    const review = await this.reviewRepository.preload({
      id: id,
      ...updateReviewDto,
    });
    if (!review) throw new NotFoundException(`Review with id ${id} not found`);

    try {
      return await this.reviewRepository.save(review);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Check logs for update error');
    }
  }

  async remove(id: string) {
    const review = await this.findOne(id);

    await this.reviewRepository.remove(review);

    return {
      message: `Review with id ${id} removed succefully`,
    };
  }
}
