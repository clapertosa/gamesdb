using Domain.Entities;
using FluentValidation;

namespace Application.Mediatr.User.Commands
{
    public class SignUpValidator : AbstractValidator<SignUpUserForm>
    {
        public SignUpValidator()
        {
            RuleFor(x => x.Email).EmailAddress().NotEmpty();
            RuleFor(x => x.UserName).MinimumLength(4).MaximumLength(12).Matches(@"\A\S+\z");
            RuleFor(x => x.Password).MinimumLength(8).MaximumLength(16);
        }
    }
}