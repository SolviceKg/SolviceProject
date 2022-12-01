import { User } from 'src/user/user.entity';
import { Photo } from './photo.entity';

export function fromDtoToEntity(
  key: string,
  user: User,
  photoBody: string,
  serviceName:string,
): Photo {
  const photo = new Photo();
  photo.body = photoBody;
  photo.key = key;
  photo.userId = user.id;
  photo.serviceName= serviceName;
  return photo;
}
