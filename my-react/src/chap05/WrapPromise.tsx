export default function wrapPromise<T>(promise:Promise<T>){
    let status: 'pending' | 'fulfilled' | 'rejected' = 'pending';
    let data: T;
    let error: any;
    let wrapper = promise.then(
        result => {
            status = 'fulfilled';
            data = result;
        },
        e => {
            status = 'rejected';
            data = e
        }
    )
    return {
        get(){
            switch(status){
                case 'fulfilled':
                    return data;
                case 'rejected':
                    throw data;
                case 'pending':
                    throw wrapper;
                default:
                    break;
            }
        }
    }
}