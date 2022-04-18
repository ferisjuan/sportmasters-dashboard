import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { IsEmailAlreadyExists } from './IsEmailAlreadyExists';
import { IsSchoolExists } from './IsSchoolExists';

@InputType()
export class SignupInput {
    @Field()
    acceptsPrivacyPolicy: boolean

    @Field()
    acceptsTermsOfService: boolean

    @Field()
    @IsEmail()
    @IsEmailAlreadyExists({ message: 'Email already exists' })
    email: string

    @Field()
    @Length(2, 15)
    firstName: string

    @Field()
    @Length(2, 15)
    lastName: string

    @Field()
    @Length(8, 100)
    password: string

    @Field()
    @IsSchoolExists({ message: 'School does not exist' })
    schoolId: string
}
