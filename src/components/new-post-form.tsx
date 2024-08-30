'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCallback, useRef, useState } from 'react'
import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { apiUrl } from '@/lib/site-config'

const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  file: z.instanceof(File, {
    message: 'Please select an image.',
  }),
  tag: z.string().min(2, {
    message: 'Tag must be at least 2 characters.',
  }),
  read_time: z.string().min(2, {
    message: 'Read time must be at least 2 characters.',
  }),
})

export function NewPostForm({ setDone }: { setDone: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      file: undefined,
      tag: 'Related',
      read_time: '3 min',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append('title', data.title)
    if (file) {
      formData.append('image', file)
    }
    formData.append('tag', data.tag)
    formData.append('read_time', data.read_time)

    try {
      const response = await fetch(`${apiUrl}/posts/related`, {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      form.reset()
      setPreviewUrl(null)
      setFile(null)
      setDone()
    } catch (error: any) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files && event.target.files[0]
      if (selectedFile) {
        if (selectedFile.size / 1024 / 1024 > 25) {
          alert('File size too big. Maximum size is 25MB.')
        } else {
          setFile(selectedFile)
          form.setValue('file', selectedFile)
          form.clearErrors('file')

          const reader = new FileReader()
          reader.onload = (e) => {
            setPreviewUrl(e.target?.result as string)
          }
          reader.readAsDataURL(selectedFile)
        }
      }
    },
    [form]
  )

  const clearFileSelection = () => {
    setFile(null)
    setPreviewUrl(null)
    if (inputFileRef.current) {
      inputFileRef.current.value = ''
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center space-y-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="Title"
                  {...field}
                  className="w-full border-2 border-black bg-white text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <input
          ref={inputFileRef}
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Button
                  disabled={isSubmitting}
                  onClick={() => inputFileRef.current?.click()}
                  type="button"
                  className="hover:text-primary w-full border-2 border-black bg-transparent hover:bg-black"
                >
                  {file ? file.name : 'Upload'}
                </Button>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {previewUrl && (
          <div className="relative max-h-[40vh] w-full max-w-xs overflow-hidden rounded-lg border-[3px] border-black">
            <Button
              type="button"
              onClick={clearFileSelection}
              className="hover:text-primary absolute right-2 top-2 p-1 hover:bg-black"
              variant="outline"
              size="icon"
              disabled={isSubmitting}
            >
              <X className="size-4" />
            </Button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl} alt="Preview" className="h-auto w-full object-cover" />
          </div>
        )}

        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <Button
          type="submit"
          className="hover:text-primary bg-black text-white hover:bg-black"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Confirm'}
        </Button>
      </form>
    </Form>
  )
}
