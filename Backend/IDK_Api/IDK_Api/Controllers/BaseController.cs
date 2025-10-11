using AutoMapper;
using BusinessLogic.DTOs;
using DataAccess.Data;
using DataAccess.Data.Entities;
//using IDK_Api.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IDK_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {

        readonly SongDbContext ctx;
        readonly IMapper mapper;
        public BaseController(SongDbContext ctx,IMapper mapper)
        {

            this.ctx = ctx;
            this.mapper = mapper;
        }
       
       
        //[HttpGet("GetHomeWork")]

        //public IActionResult GetHomeWork(DateTime? dateTime)
        //{
        //    if(dateTime != null)
        //    {
        //        var model = ctx.Items.Where(m=> m.);

        //    }
        //    return Ok(model);

        //}
       
      
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
