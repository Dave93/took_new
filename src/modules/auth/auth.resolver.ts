import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth, SendOtpToken } from './entities/auth.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { LoginResponseDto, TokenDto } from './dto';
import { CurrentUser } from '@modules/auth/decorators';
import { users } from '../../@generated/users/users.model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@modules/auth/guards';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  createAuth(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
    return this.authService.create(createAuthInput);
  }

  @Query(() => [Auth], { name: 'auth' })
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => Auth, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Mutation(() => Auth)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => Auth)
  removeAuth(@Args('id', { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }

  @Mutation(() => SendOtpToken, { nullable: true })
  async sendOtp(@Args('phone', { type: () => String }) phone: string): Promise<SendOtpToken> {
    const result = await this.authService.sendOtp(phone);
    return result;
  }

  @Mutation(() => LoginResponseDto, { nullable: true })
  async verifyOtp(
    @Args('phone', { type: () => String }) phone: string,
    @Args('otp', { type: () => String }) otp: string,
    @Args('verificationKey', { type: () => String }) verificationKey: string,
    @Args('deviceToken', { type: () => String, nullable: true }) deviceToken: string = '',
    @Args('tgId', { type: () => Int, nullable: true }) tgId: number = null,
  ): Promise<LoginResponseDto> {
    const result = await this.authService.verifyOtp(phone, otp, verificationKey, deviceToken, tgId);
    return result;
  }

  @Mutation(() => TokenDto, { nullable: true })
  async refreshToken(@Args('refreshToken', { type: () => String }) refreshToken: string): Promise<TokenDto> {
    const result = await this.authService.generateRefreshToken(refreshToken);
    return result;
  }

  @Mutation(() => Boolean, { nullable: true })
  @UseGuards(JwtAuthGuard)
  async logout(@CurrentUser() user: users): Promise<boolean> {
    const result = await this.authService.logout(user);
    return result;
  }
}
