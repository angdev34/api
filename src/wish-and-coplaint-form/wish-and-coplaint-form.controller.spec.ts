import { Test, TestingModule } from '@nestjs/testing';
import { WishAndCoplaintFormController } from './wish-and-coplaint-form.controller';
import { WishAndCoplaintFormService } from './wish-and-coplaint-form.service';

describe('WishAndCoplaintFormController', () => {
  let controller: WishAndCoplaintFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishAndCoplaintFormController],
      providers: [WishAndCoplaintFormService],
    }).compile();

    controller = module.get<WishAndCoplaintFormController>(WishAndCoplaintFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
