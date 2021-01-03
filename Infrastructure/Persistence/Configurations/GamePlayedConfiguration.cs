using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations
{
    public class GamePlayedConfiguration:IEntityTypeConfiguration<GamePlayed>
    {
        public void Configure(EntityTypeBuilder<GamePlayed> builder)
        {
            builder.ToTable("Played");

            builder.HasKey(x => new {x.GameId, x.ProfileId});

            builder.HasOne(x => x.Game).WithMany(x => x.PlayedBy).HasForeignKey(x => x.GameId);
            
            builder.HasOne(x => x.Profile).WithMany(x => x.GamePlayed).HasForeignKey(x => x.ProfileId);
        }
    }
}