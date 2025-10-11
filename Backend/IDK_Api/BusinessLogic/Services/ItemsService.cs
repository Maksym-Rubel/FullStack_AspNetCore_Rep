using AutoMapper;
using BusinessLogic.DTOs;
using BusinessLogic.Interface;
using DataAccess.Data;
using DataAccess.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Services
{
    public class ItemsService : IItemsInterface
    {
        readonly SongDbContext ctx;
        readonly IMapper mapper;
        public ItemsService(SongDbContext ctx, IMapper mapper)
        {
            this.ctx = ctx;
            this.mapper = mapper;
        }
        public ItemDto? GetOneItem(int id)
        {
            var model = ctx.Items
                .FirstOrDefault(m => m.Id == id);
            var entity = mapper.Map<ItemDto>(model);
            return entity;
        }
        public IList<ItemDto>? GetDayItems(DateTime dateTime, int WeekDay)
        {
            var modelret = new List<Item>();
            var dateonly = dateTime.Date;
            var nextDay = dateonly.AddDays(7 - WeekDay);
            var model = ctx.WeekDays.Where(m => m.DayOfWeek == WeekDay && m.DayInCalendar >= dateonly && m.DayInCalendar < nextDay).FirstOrDefault();
            if (model != null)
            {
                var ItemList = ctx.ItemWeekDays.Where(m => m.DayId == model.Id).ToList();
                foreach (var item in ItemList)
                {
                    if (ctx.Items.Any(m => item.ItemId == m.Id))
                    {
                        modelret.Add(ctx.Items.FirstOrDefault(m => item.ItemId == m.Id));
                    }
                }
                return mapper.Map<IList<ItemDto>>(modelret);
            }
            return new List<ItemDto>();
        }
        public IList<ItemDto>? GetAllItem()
        {
            var model = ctx.Items;
            return mapper.Map<IList<ItemDto>>(model);
        }
        public CreateItemDto? CreateItem(CreateItemDto model)
        {
            var entity = mapper.Map<Item>(model);
            ctx.Items.Add(entity);
            ctx.SaveChanges();

            return mapper.Map<CreateItemDto>(entity);

        }
    }
}
