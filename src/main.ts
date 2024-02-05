import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        return new BadRequestException(
          errors.reduce((acc, error) => {
            return {
              ...acc,
              [error.property]: Object.keys(error.constraints).map(
                (errorName) => error.constraints[errorName],
              ),
            };
          }, {}),
        );
      },
      // stopAtFirstError: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
