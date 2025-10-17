const RoleLocal = "Role"

export const userRole =
{
    set(Role)
    {
        localStorage.setItem(RoleLocal,Role)
        console.log(Role);
    },
    get()
    {
        
        return localStorage.getItem(RoleLocal);
    },
    clear()
    {
        localStorage.removeItem(RoleLocal);
    }
    
}