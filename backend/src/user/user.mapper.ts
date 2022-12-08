import { ValidationUserDto } from './dto/create.user.dto';
import { User } from './user.entity';

export function fromDtoToEntity(validationUserDto: ValidationUserDto): User {
  const { name, username, password, email,role } = validationUserDto;
  const user = new User();
  user.name = name;
  user.username = username;
  user.password = password;
  user.email = email;
  user.role=role;
  return user;
}
