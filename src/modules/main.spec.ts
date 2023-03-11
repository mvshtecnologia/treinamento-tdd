import { OlaMundo } from "./main";

describe('Main Unit Test', () => {

  it('welcome DDD && TDD && BDD ', () => {
    //ARRANGE
    const expectedMessage = 'Welcome';
    const hi = new OlaMundo();

    //ACTION
    const result = hi.command();

    //ASSERT
    expect(hi).not.toBeNull();
    expect(result).toBe(expectedMessage);
  });
});