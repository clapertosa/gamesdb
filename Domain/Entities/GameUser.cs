﻿using System;

namespace Domain.Entities
{
    public class GameUser
    {
        public Guid GameId { get; set; }
        public Guid ProfileId { get; set; }
        public Game Game { get; set; }
        public Profile Profile { get; set; }
    }
}