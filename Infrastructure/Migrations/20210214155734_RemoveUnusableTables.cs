using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class RemoveUnusableTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Played");

            migrationBuilder.DropTable(
                name: "Playing");

            migrationBuilder.DropTable(
                name: "Wanted");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Played",
                columns: table => new
                {
                    GameId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProfileId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Played", x => new { x.GameId, x.ProfileId });
                    table.ForeignKey(
                        name: "FK_Played_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Played_Profiles_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "Profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Playing",
                columns: table => new
                {
                    GameId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProfileId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Playing", x => new { x.GameId, x.ProfileId });
                    table.ForeignKey(
                        name: "FK_Playing_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Playing_Profiles_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "Profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Wanted",
                columns: table => new
                {
                    GameId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProfileId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wanted", x => new { x.GameId, x.ProfileId });
                    table.ForeignKey(
                        name: "FK_Wanted_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Wanted_Profiles_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "Profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Played_ProfileId",
                table: "Played",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Playing_ProfileId",
                table: "Playing",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Wanted_ProfileId",
                table: "Wanted",
                column: "ProfileId");
        }
    }
}
