import {Rating} from '../interfaces/rating';
export interface StoreItem {
    category: string    
    description?: string
    id: number
    image?: string
    price: number
    rating?: Rating
    title: string
}
