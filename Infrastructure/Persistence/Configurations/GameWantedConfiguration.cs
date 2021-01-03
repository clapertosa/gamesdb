using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations
{
    public class GameWantedConfiguration:IEntityTypeConfiguration<GameWanted>
    {
        public void Configure(EntityTypeBuilder<GameWanted> builder)
        {
            builder.ToTable("Wanted");
            
            builder.HasKey(x => new {x.GameId, x.ProfileId});

            builder.HasOne(x => x.Game).WithMany(x => x.WantedBy).HasForeignKey(x => x.GameId);

            builder.HasOne(x => x.Profile).WithMany(x => x.GameWanted).HasForeignKey(x => x.ProfileId);
        }
    }
}