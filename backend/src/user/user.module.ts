import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowModule } from 'src/follow/follow.module';
import { PhotoModule } from 'src/photo/photo.module';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'mykey',
      signOptions: {
        expiresIn: 604800, // 1week
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
    forwardRef(() => PhotoModule),
    forwardRef(() => FollowModule),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  exports: [JwtStrategy, PassportModule, UserService],
})
export class UserModule {}
