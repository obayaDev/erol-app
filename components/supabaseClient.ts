import { StorageClient } from '@supabase/storage-js'

const STORAGE_URL = 'https://butfaxigstqpccvremhs.supabase.co/storage/v1'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1dGZheGlnc3RxcGNjdnJlbWhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODgyNDUyOCwiZXhwIjoxOTk0NDAwNTI4fQ.xueZJJsNVYM9hY61hE-OwXae_RLPzU2WZvjmKwJDM_4' //! service key, not anon key

const storageClient = new StorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
})

export default storageClient