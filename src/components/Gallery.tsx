'use client'

import { SetStateAction, useState } from 'react'

interface ImageType {
  id: number;
  src: string;
  alt: string;
}
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'
import client from '../../sanity/sanity.client';

// Sample image data (replace with your actual image data)
const images = [
  { id: 1, src: '/placeholder.svg?height=300&width=400', alt: 'Company image 1' },
  { id: 2, src: '/placeholder.svg?height=300&width=400', alt: 'Company image 2' },
  { id: 3, src: '/placeholder.svg?height=300&width=400', alt: 'Company image 3' },
  { id: 4, src: '/placeholder.svg?height=300&width=400', alt: 'Company image 4' },
  { id: 5, src: '/placeholder.svg?height=300&width=400', alt: 'Company image 5' },
  { id: 6, src: '/placeholder.svg?height=300&width=400', alt: 'Company image 6' },
]

export default function ImageGallery() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const query = `*[_type == "gallery"]{
    _id,
    "imageUrl": image.asset->url,
    project
  }`

  const openModal = (image: ImageType | null) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const navigateImage = (direction: number) => {
    if (!selectedImage) return; // Early return if selectedImage is null
  
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="cursor-pointer" onClick={() => openModal(image)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10"
              onClick={closeModal}
            >
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="rounded-lg object-contain w-full h-[60vh]"
              />
            )}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button variant="ghost" size="icon" onClick={() => navigateImage(-1)}>
                <ChevronLeftIcon className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button variant="ghost" size="icon" onClick={() => navigateImage(1)}>
                <ChevronRightIcon className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-2 overflow-x-auto py-2">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`flex-shrink-0 ${
                  selectedImage && selectedImage.id === image.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={60}
                  className="rounded object-cover w-20 h-16"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}