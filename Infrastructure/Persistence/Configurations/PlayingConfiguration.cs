using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations
{
    public class PlayingConfiguration:IEntityTypeConfiguration<GameUser>
    {
        public void Configure(EntityTypeBuilder<GameUser> builder)
        {
            builder.ToTable("Playing");

            builder.HasKey(x => new {x.GameId, x.ProfileId});

            builder.HasOne(x => x.Game).WithMany(x => x.PlayingBy).HasForeignKey(x => x.GameId);
            
            builder.HasOne(x => x.Profile).WithMany(x => x.GamePlaying).HasForeignKey(x => x.ProfileId);
        }
    }
}