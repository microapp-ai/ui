import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { FileUpload, FileUploadProps } from './FileUpload';
import { ImageCarousel } from './ImageList'
import { Button } from './button';
import { cn } from "@/utils";


const meta: Meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
};

export default meta;

const Template: Story<FileUploadProps> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Upload Your Files',
  description: 'Drag and drop image files here or click to select files.',
  width: '430px',
  formats: ['image/jpeg', 'image/png'],
  onFileDrop: (files) => console.log(files),
};
export const DarkMode = Template.bind({});
DarkMode.args = {
  className: "dark",
  label: 'Upload Your Files',
  description: 'Drag and drop image files here or click to select files.',
  width: '430px',
  formats: ['image/jpeg', 'image/png'],
  onFileDrop: (files) => console.log(files),
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Upload Your Files',
  description: 'Drag and drop image files here or click to select files.',
  formats: ['image/jpeg', 'image/png'],
  error: 'Only image files are allowed.',
  width: '430px',
  onFileDrop: (files) => console.log(files),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Upload Your Files',
  description: 'Drag and drop image files here or click to select files.',
  formats: ['image/jpeg', 'image/png'],
  disabled: true,
  width: '430px',
  onFileDrop: (files) => console.log(files),
};

export const CustomDropzoneContent = Template.bind({});
CustomDropzoneContent.args = {
  label: 'Upload Your Files(Custom)',
  description: 'Drag and drop image files here or click to select files.',
  formats: ['image/jpeg', 'image/png'],
  width:'430px',
  renderDropzoneContent: (isDragActive, disabled) => (
    <>
      <div className="text-center">
        <div className="flex flex-col items-center mb-[12px]">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33313 20.3657C4.34252 19.3536 3.59523 18.1293 3.14785 16.7856C2.70047 15.4419 2.56474 14.014 2.75095 12.6101C2.93715 11.2062 3.44041 9.86302 4.22259 8.6824C5.00478 7.50178 6.04538 6.51464 7.26558 5.79575C8.48578 5.07687 9.85357 4.64509 11.2654 4.53312C12.6771 4.42116 14.0959 4.63194 15.4142 5.1495C16.7324 5.66706 17.9156 6.47783 18.8741 7.5204C19.8326 8.56297 20.5413 9.81 20.9465 11.167H23.3331C24.6205 11.1669 25.8737 11.5808 26.9078 12.3476C27.9418 13.1144 28.7018 14.1935 29.0755 15.4254C29.4492 16.6574 29.4167 17.9768 28.9829 19.1889C28.5491 20.4009 27.737 21.4413 26.6665 22.1564M15.9998 16.5004V28.5004M15.9998 16.5004L21.3331 21.8337M15.9998 16.5004L10.6665 21.8337"
              stroke="#76767F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-400">
          {isDragActive ? "Release to drop the files" : "Drag your files here"}
        </p>
      </div>
    </>
  ),
  onFileDrop: (files) => console.log(files),
};


const ImageUploadTemplate: Story<FileUploadProps> = (args) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileDrop = (files: File[]) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <div className={cn(args.className)}>
      <FileUpload
        {...args}
        onFileDrop={handleFileDrop}
      />
      <ImageCarousel
        images={uploadedFiles}
        onChange={(images) => setUploadedFiles(images)}
      />
    </div>
  );
};

export const ImageUploadWithCarousel = ImageUploadTemplate.bind({});
ImageUploadWithCarousel.args = {
  label: 'Upload Images',
  description: 'Image Dropzone with Carousel',
  width: '430px',
  formats: ['image/jpeg', 'image/png'],
};