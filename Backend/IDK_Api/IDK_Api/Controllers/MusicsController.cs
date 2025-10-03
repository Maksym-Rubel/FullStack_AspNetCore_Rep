using AutoMapper;
using BusinessLogic.DTOs;
using DataAccess.Data;
using DataAccess.Data.Entities;
//using IDK_Api.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace IDK_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicsController : ControllerBase
    {

        readonly SongDbContext ctx;
        readonly IMapper mapper;
        public MusicsController(SongDbContext ctx,IMapper mapper)
        {

            this.ctx = ctx;
            this.mapper = mapper;
        }
        [HttpGet("GetOneHomeWorkItem")]
        public IActionResult GetOneHomeWorkItem(DateTime dateTime)
        {
            var dateonly = dateTime.Date;
            var nextDay = dateonly.AddDays(1);
            var model = ctx.homeWorkItems.Where(m => m.HomeWorkDate >= dateonly && m.HomeWorkDate < nextDay).ToList();


            return Ok(model);

        }
        [HttpGet("GetDayItems")]

        public IActionResult GetDayItems(DateTime dateTime,int WeekDay)
        {
            var modelret = new List<Item>();
            var dateonly = dateTime.Date;
            var nextDay = dateonly.AddDays(7-WeekDay);
            var model = ctx.WeekDays.Where(m => m.DayOfWeek == WeekDay && m.DayInCalendar >= dateonly && m.DayInCalendar < nextDay).FirstOrDefault();
            //var ItemList = ctx.ItemWeekDay
            if(model != null)
            {
                var ItemList = ctx.ItemWeekDays.Where(m => m.DayId == model.Id).ToList();
                foreach(var item in ItemList)
                {
                    if(ctx.Items.Any(m => item.ItemId == m.Id))
                    {
                        modelret.Add(ctx.Items.FirstOrDefault(m => item.ItemId == m.Id));
                    }
                }
                return Ok(modelret);

            }
            return BadRequest();

        }
        [HttpPost]
        public IActionResult CreateHomeWorkItem(HomeWorkItem model)
        {


            //var ModelFirst = new HomeWorkItem{
            //    ItemId = 1,
            //    Decription = "прочитати парграф",
            //    HomeWorkDate = DateTime.Now.AddDays(1),
            //};
            if(!ModelState.IsValid)
            {
                return BadRequest("Error");
            }

            ctx.homeWorkItems.Add(model);
            ctx.SaveChanges();

            return Created();

        }
        [HttpPost("CreateItem")]
        public IActionResult CreateItem(ItemDto model)
        {


            
            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            var entity = mapper.Map<Item>(model);
            ctx.Items.Add(entity);
            ctx.SaveChanges();

            return Created();

        }
        [HttpPost("CreateItemWeekDay")]
        public IActionResult CreateItemWeekDay(ItemWeekDayDto model)
        {



            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            var entity = mapper.Map<ItemWeekDay>(model);
            ctx.ItemWeekDays.Add(entity);
            ctx.SaveChanges();

            return Created();

        }
        [HttpPost("CreateWeekDay")]

        public IActionResult CreateWeekDay(WeekDayDto model)
        {



            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            var entity = mapper.Map<WeekDay>(model);
            ctx.WeekDays.Add(entity);
            ctx.SaveChanges();

            return Created();

        }
        //[HttpPatch]
        //public IActionResult EditHomeWorkItem(HomeWorkItem model)
        //{


        //    //var ModelFirst = new HomeWorkItem{
        //    //    ItemId = 1,
        //    //    Decription = "прочитати парграф",
        //    //    HomeWorkDate = DateTime.Now.AddDays(1),
        //    //};
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest("Error");
        //    }

        //    ctx.homeWorkItems.Update(model);
        //    ctx.SaveChanges();

        //    return Created();

        //}

        //public IActionResult GetSong(int id)
        //{

        //}

        //public IActionResult Create()
        //{

        //}
    }
}
