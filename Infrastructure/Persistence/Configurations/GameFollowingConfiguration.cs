using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations
{
    public class GameFollowingConfiguration : IEntityTypeConfiguration<GameFollowing>
    {
        public void Configure(EntityTypeBuilder<GameFollowing> builder)
        {
            builder.ToTable("Followings");

            builder.HasKey(x => new {x.GameId, x.ProfileId});

            builder.HasOne(x => x.Profile).WithMany(x => x.GameFollowed).HasForeignKey(x => x.ProfileId);

            builder.HasOne(x => x.Game).WithMany(x => x.FollowedBy).HasForeignKey(x => x.GameId);
        }
    }
}