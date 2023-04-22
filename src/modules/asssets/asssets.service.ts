import { Injectable } from '@nestjs/common';
import { CreateAsssetInput } from './dto/create-assset.input';
import { UpdateAsssetInput } from './dto/update-assset.input';
import { FileUpload } from 'graphql-upload-minimal';
import { join } from 'path';
import { createWriteStream, mkdirSync, unlinkSync } from 'fs';
import url from 'node:url';
import { PrismaService } from '../../prisma.service';
import { assets } from '../../@generated/assets/assets.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AsssetsService {
  constructor(private readonly prismaService: PrismaService, private readonly configService: ConfigService) {}

  genRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charLength = chars.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
  }

  async saveModelAssets(file: FileUpload, model: string, model_id: string = null): Promise<assets> {
    const { createReadStream, filename } = await file;
    const stream = createReadStream();
    let courierCommentVoicePath = '';
    const random = this.genRandomString(5);
    if (model_id) {
      courierCommentVoicePath = join(process.cwd(), `../uploads/${model}/${model_id}/${random}/`);
    } else {
      courierCommentVoicePath = join(process.cwd(), `../uploads/${model}/${random}/`);
    }
    mkdirSync(courierCommentVoicePath, { recursive: true });
    return new Promise((resolve, reject) => {
      stream
        .on('end', () => {
          // console.log('ReadStream Ended');
        })
        .on('close', () => {
          // console.log('ReadStream Closed');
        })
        .on('error', (err) => {
          // console.error('ReadStream Error', err);
        })
        .pipe(createWriteStream(join(courierCommentVoicePath, `./${filename}`)))
        .on('close', async () => {
          const asset = await this.prismaService.assets.create({
            data: {
              model_id,
              model,
              file_name: filename,
              sub_folder: random,
            },
            select: {
              id: true,
              model: true,
              model_id: true,
              file_name: true,
              sub_folder: true,
            },
          });
          resolve(asset);
        })
        .on('error', (err) => {
          // console.log(err);
          reject('error');
        });
    });
  }

  async uploadFile(file: FileUpload, modelId: string) {
    const { createReadStream, filename } = await file;
    const stream = createReadStream();
    let path = '';
    const random = this.genRandomString(5);
    path = join(process.cwd(), `../uploads/model_uploads/${modelId}/`);
    mkdirSync(path, { recursive: true });
    const apiDomain = this.configService.get('API_DOMAIN');
    return new Promise((resolve, reject) => {
      stream
        .on('end', () => {
          // console.log('ReadStream Ended');
        })
        .on('close', () => {
          // console.log('ReadStream Closed');
        })
        .on('error', (err) => {
          // console.error('ReadStream Error', err);
        })
        .pipe(createWriteStream(join(path, `./${filename}`)))
        .on('close', async () => {
          resolve(`https://${apiDomain}/model_uploads/${modelId}/${filename}`);
        })
        .on('error', (err) => {
          // console.log(err);
          reject('error');
        });
    });
  }

  removeFile(url: string) {
    const myURL = new URL(url);
    const path = join(process.cwd(), `../uploads/${myURL.pathname}`);
    unlinkSync(path);
    return true;
  }
}
