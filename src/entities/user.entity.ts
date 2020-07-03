import { Entity, Column, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 25, unique: true })
  uid: string;

  @Column({ type: 'varchar', length: 25 })
  uidNumber: string;

  @Column({ type: 'varchar', length: 25 })
  gidNumber: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  sn: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  givenName: string;

  @Column({ type: 'varchar', length: 25 })
  employeeNumber: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  cn: string;

  @OneToOne(() => Student, { eager: true })
  student: Student;

  @OneToOne(() => Teacher, { eager: true })
  teacher: Teacher;
}
