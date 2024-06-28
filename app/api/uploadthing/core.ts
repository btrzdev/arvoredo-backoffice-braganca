import {createUploadthing, type FileRouter} from 'uploadthing/next';
import {auth} from '@clerk/nextjs/server';

const f = createUploadthing();

const handleAuth = () => {
  const {userId} = auth();

  if (!userId) throw new Error('Não autorizado!');
  return {userId};
};

export const ourFileRouter = {
  profileImage: f({image: {maxFileSize: '5MB', maxFileCount: 1}})
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
