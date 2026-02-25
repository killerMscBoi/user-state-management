import { TestBed } from '@angular/core/testing';
import { User } from './user';

describe('User Service', () => {
  let service: User;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', () => {
    service.addUser('John', 'john@test.com');

    const users = service.userList();
    expect(users.length).toBe(1);
    expect(users[0].name).toBe('John');
    expect(users[0].email).toBe('john@test.com');
  });

  it('should remove a user', () => {
    service.addUser('John', 'john@test.com');
    const userId = service.userList()[0].id;

    service.removeUser(userId);

    expect(service.userList().length).toBe(0);
  });

  it('should update totalUsers correctly', () => {
    service.addUser('User1', 'u1@test.com');
    service.addUser('User2', 'u2@test.com');

    expect(service.totalUsers()).toBe(2);
  });
});