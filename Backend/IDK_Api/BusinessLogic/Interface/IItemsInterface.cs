using BusinessLogic.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Interface
{
    public interface IItemsInterface
    {
        ItemDto? GetOneItem(int id);
        IList<ItemDto>? GetDayItems(DateTime dateTime, int WeekDay);
        public IList<ItemDto>? GetAllItem();
        CreateItemDto? CreateItem(CreateItemDto model);
    }
}
