import { toast } from 'sonner';

export class UtilityHandler {
    static onSubmitPost<T>(url: string, data: T): void {
        toast.loading('Submitting Form');
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.error) {
                    toast.error(result.error);
                }
                toast.dismiss();
                window.location.reload();
            })
            .catch((error) => {
                toast.error(error);
            });
    }
}
