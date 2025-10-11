using AutoMapper;
using BusinessLogic.DTOs;
using DataAccess.Data;
using DataAccess.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace IDK_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeworkController : ControllerBase
    {
        readonly SongDbContext ctx;
        readonly IMapper mapper;
        public HomeworkController(SongDbContext ctx, IMapper mapper)
        {

            this.ctx = ctx;
            this.mapper = mapper;
        }

        [HttpGet("GeHomeWorkItems")]
        public IActionResult GeHomeWorkItems(DateTime dateTime)
        {
            var dateonly = dateTime.Date;
            var nextDay = dateonly.AddDays(1);
            var model = ctx.homeWorkItems
                .Where(m => m.HomeWorkDate >= dateonly && m.HomeWorkDate < nextDay).ToList();

            //var entity = mapper.Map<HomeWorkItemDto>(model);
            return Ok(model);

        }
        [HttpPost("CreateHomeWork")]

        public IActionResult CreateHomeWork(HomeWorkItemDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            if(!ctx.homeWorkItems.Any(m=> m.ItemId == model.ItemId && m.HomeWorkDate == model.HomeWorkDate && m.Decription == model.Decription))
            {
                var entity = mapper.Map<HomeWorkItem>(model);
                ctx.homeWorkItems.Add(entity);
                ctx.SaveChanges();

                return Created();
            }
            return BadRequest("Item with this parametres alredy created");

        }
    }
}
