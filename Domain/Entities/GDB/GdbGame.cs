﻿using System.Collections.Generic;

namespace Domain.Entities.GDB
{
    public class GdbGame
    {
        public int Id { get; set; } 
        public double AggregatedRating { get; set; } 
        public int AggregatedRatingCount { get; set; } 
        public int Category { get; set; } 
        public int Cover { get; set; } 
        public int CreatedAt { get; set; } 
        public ICollection<int> ExternalGames { get; set; } 
        public int FirstReleaseDate { get; set; } 
        public int Follows { get; set; } 
        public ICollection<int> GameModes { get; set; } 
        public ICollection<int> Genres { get; set; } 
        public ICollection<int> InvolvedCompanies { get; set; } 
        public ICollection<int> Keywords { get; set; } 
        public string Name { get; set; } 
        public ICollection<int> Platforms { get; set; } 
        public ICollection<int> PlayerPerspectives { get; set; } 
        public double Rating { get; set; } 
        public int RatingCount { get; set; } 
        public ICollection<int> ReleaseDates { get; set; } 
        public ICollection<int> Screenshots { get; set; } 
        public ICollection<int> SimilarGames { get; set; } 
        public string Slug { get; set; } 
        public string Summary { get; set; } 
        public ICollection<int> Tags { get; set; } 
        public ICollection<int> Themes { get; set; } 
        public double TotalRating { get; set; } 
        public int TotalRatingCount { get; set; } 
        public int UpdatedAt { get; set; } 
        public string Url { get; set; } 
        public ICollection<int> Videos { get; set; } 
        public ICollection<int> Websites { get; set; } 
        public string Checksum { get; set; } 
    }
}