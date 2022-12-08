var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return User;
    };
    User.prototype.isAdmin = function () {
        switch (this.role) {
            case 1:
                return "is admin";
                break;
            case 2:
                return "is normal user";
                break;
            default:
                return "enter role again";
                break;
        }
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    return User;
}());
var user = new User("Lam", "nguyentunglam2410@gmail.com", 3);
console.log(user.isAdmin());
