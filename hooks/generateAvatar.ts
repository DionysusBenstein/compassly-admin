const generateAvatar = (
  name: string,
  surname: string,
  size: number,
  user?: any
) => {
  const canvas = document.createElement("canvas");
  canvas.id = "mini_user_avatar";
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!user?.avatar && ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#E9E9E9";
    ctx.fillRect(0, 0, size, size);
    ctx.closePath();

    ctx.beginPath();
    ctx.font = `${Number(size) / 2}px Arial`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${name[0]}${surname[0]}`, canvas.width / 2, canvas.width / 2);
    ctx.closePath();
    return canvas.toDataURL();
  }
  return user.avatar;
};

export { generateAvatar };
