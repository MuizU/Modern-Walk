import { TProduct } from "../types/product";

export const getProducts = async (): Promise<TProduct[]> => {
    let statusCode = 500;
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data: TProduct[] = await response.json()
        return data;
        
    } catch (error) {
        statusCode = (error as Error)?.message === 'cancelled' ? 499 : (error as Response)?.status || 500;

        console.warn(`products request failed. URL: ${(error as Response)?.url || 'unknown'}`, {
            status: statusCode,
            url: (error as Response)?.url,
        });


        throw new Error('Catalog request failed', {
            cause: {
                ...(error as Response),
                statusCode,
                status: statusCode ? `${statusCode}` : '404',
            },
        });
    }
};

