export class UserDto {
    userId: number;
    email: string;
    password: string;
    username: string;
    deptName: string;
    role: string;
  
    constructor(userId: number, email: string, password: string, username: string, deptName: string, role: string) {
      this.userId = userId;
      this.email = email;
      this.password = password;
      this.username = username;
      this.deptName = deptName;
      this.role = role;
    }
}
