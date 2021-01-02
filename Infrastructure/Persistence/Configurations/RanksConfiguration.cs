using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations
{
    public class RanksConfiguration:IEntityTypeConfiguration<GameRankUser>
    {
        public void Configure(EntityTypeBuilder<GameRankUser> builder)
        {
            builder.ToTable("Ranks");

            builder.HasKey(x => new {x.GameId, x.ProfileId});

            builder.HasOne(x => x.Game).WithMany(x => x.Ranks).HasForeignKey(x => x.GameId);

            builder.HasOne(x => x.Profile).WithMany(x => x.Ranks).HasForeignKey(x => x.ProfileId);
        }
    }
}