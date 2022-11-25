import { Test, TestingModule } from '@nestjs/testing';
import { WishAndCoplaintFormService } from './wish-and-coplaint-form.service';

describe('WishAndCoplaintFormService', () => {
  let service: WishAndCoplaintFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishAndCoplaintFormService],
    }).compile();

    service = module.get<WishAndCoplaintFormService>(WishAndCoplaintFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
