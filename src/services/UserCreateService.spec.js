const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");
const UserCreateService = require("./UserCreateService");

describe("UserCreateService", () => {
  let userRepositoryInMemory = null;
  let userCreateService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepositoryInMemory);
  });

  it("User should be create", async () => {
    const user = {
      name: "Marcus",
      email: "marcus@gmail.com",
      password: "1234",
    };
    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");
  });

  it("User should be create with exists email", async () => {
    const user1 = {
      name: "User test",
      email: "test@gmail.com",
      password: "1234",
    };

    const user2 = {
      name: "User test 2",
      email: "test@gmail.com",
      password: "1234",
    };

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(
      new AppError("Este e-mail já esta cadastrado")
    );
  });
});
