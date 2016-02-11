export class World {
    public static tell(msg: string): void {
        $(document.body).append(`<p>${msg}</p>`);
    }
}