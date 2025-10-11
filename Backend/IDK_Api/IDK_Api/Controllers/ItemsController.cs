using AutoMapper;
using BusinessLogic.DTOs;
using DataAccess.Data;
using DataAccess.Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Interface;
using BusinessLogic;
using BusinessLogic.Services;

namespace IDK_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {

        private readonly IItemsInterface itemService;
       
        public ItemsController(IItemsInterface itemService)
        {
            this.itemService = itemService;
        }
        [HttpGet("GetOneItem")]
        public IActionResult GetOneItem(int id)
        {
            return Ok(itemService.GetOneItem(id));
        }
        [HttpGet("GetDayItems")]
        public IActionResult GetDayItems(DateTime dateTime, int WeekDay)
        {
            return Ok(itemService.GetDayItems(dateTime,WeekDay));
        }
        [HttpGet("GetAllItem")]
        public IActionResult GetAllItem()
        {
            return Ok(itemService.GetAllItem());
        }
        [HttpPost("CreateItem")]
        public IActionResult CreateItem(CreateItemDto model)
        {
            return Ok(itemService.CreateItem(model));
        }
    }
}
