import router from "@/modules/daybook/router";

describe("Pruebas en el router", () => {
  test("debe de funcionar el router", async() => {
    expect(router).toMatchObject({
      name: "daybook",
      component: expect.any(Function),
      children: [
        {
          path: "",
          name: "no-entry",
          component: expect.any(Function),
        },
        {
          path: ":id",
          name: "entry",
          component: expect.any(Function),
          props: expect.any(Function)
        }
      ],
    });

    // expect((await router.children[0].component()).default.name).toBe("NoEntrySelected");
    // expect((await router.children[1].component()).default.name).toBe("EntryView");
    const promiseRoutes = []
    router.children.forEach(child => {
      promiseRoutes.push(child.component())
    })
    const routes = (await Promise.all(promiseRoutes)).map(route => route.default.name)

    expect(routes).toContain("NoEntrySelected")
    expect(routes).toContain("EntryView")

    
  });



});
