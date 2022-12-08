class User {
    protected name: string;
    protected email: string;
    protected role: number;
    constructor(name: string, email: string, role: number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo() {
        return User
    }
    isAdmin() {
        switch (this.role) {
            case 1:
                return "is admin"
                break;
            case 2:
                return "is normal user"
                break;
            default:
                return "enter role again"
                break;
        }
    }
    setName(name: string) {
        this.name = name;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setRole(role: number) {
        this.role = role;
    }
}
let user = new User("Lam", "nguyentunglam2410@gmail.com", 3);
console.log(user.isAdmin())