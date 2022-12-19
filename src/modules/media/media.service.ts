import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import fs, { mkdirSync } from 'fs';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MediaService {
  constructor(private readonly configService: ConfigService) {}
  create(createMediaDto: CreateMediaDto) {
    return 'This action adds a new media';
  }

  findAll() {
    return `This action returns all media`;
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }

  saveFile(file: Express.Multer.File) {
    const { originalname, buffer } = file;
    const random = this.genRandomString(5);
    let path = join(process.cwd(), `../uploads/common/${random}/`);

    mkdirSync(path, { recursive: true });
    path += join(path, originalname);
    fs.writeFileSync(path, buffer);
    const apiDomain = this.configService.get('API_DOMAIN');
    return { url: `https://${apiDomain}/common/${random}/${originalname}` };
  }

  genRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charLength = chars.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
  }
}
