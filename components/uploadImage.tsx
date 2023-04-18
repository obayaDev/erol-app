"use client"
import React, { useEffect, useState } from 'react'
import storageClient from "./supabaseClient"

export default function UploadImage(){

    const [url, setUrl] = useState("home/aria")

    useEffect(() => {
        downloadImage(url)
    }, [url])

    async function downloadImage(path: string) {
        const { data, error } = await storageClient.from('erol').download(path)
        if (error) {
            throw error
        }
        const url = URL.createObjectURL(data)
        setUrl(url)
    }

    const upload: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        
        if (!event.target.files || event.target.files.length === 0) {
            throw new Error('You must select an image to upload.')
        }
    
        const file = event.target.files[0]
        const fileName = file.name.split('.')

        const { data, error } = await storageClient.from('erol').upload(fileName[0], file)
        console.log(data)
        
        setUrl(fileName[0])
    }

    return(
        <div>
            <img
                src={url}
                alt="Avatar"
                className="avatar image"
                style={{ height: 100, width: 100 }}
            />
            <div style={{ width: 100 }}>
                <label className="button primary block" htmlFor="single">
                    Upload
                </label>
                <input
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                }}
                type="file"
                id="single"
                accept="image/*"
                onChange={upload}
                disabled={false}
                />
            </div>
        </div>
    )
}