import prisma from "./database";

(async () => {
  const firstSelect = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    orderBy: {
      _count: {
        id: "desc"
      }
    }
  });
  console.log(firstSelect);

  const secondSelect = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    where: {
      jobId: null
    },
    orderBy: {
      _count: {
        id: "desc"
      }
    }
  });
  console.log(secondSelect);

  const thirdSelect = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    where: {
      jobId: {
        equals: null
      }
    },
    orderBy: {
      _count: {
        id: "desc"
      }
    },
    having: {
      id: {
        _count: {
          gte: 500
        }
      }
    }
  });
  console.log(thirdSelect);
})()