export class TestDataUtils {
  static randomEmail(): string {
    return `qa_${Date.now()}@example.com`;
  }

  static randomName(): string {
    return `TestUser_${Date.now()}`;
  }
}
