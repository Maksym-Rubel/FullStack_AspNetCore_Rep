using AutoMapper;
using BusinessLogic.DTOs;
using DataAccess.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Configuration
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<ItemDto, Item>();
            CreateMap<ItemWeekDayDto, ItemWeekDay>();
            CreateMap<WeekDayDto, WeekDay>();

        }
    }
}
